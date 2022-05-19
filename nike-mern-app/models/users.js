import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import mongooseUniqueValidator from 'mongoose-unique-validator'

// FIELDS SAVED TO DB
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 30 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

userSchema.virtual('createdCollab', {
  ref: 'Collab',
  localField: '_id',
  foreignField: 'owner'
})

userSchema.set('toJSON', {
  virtuals: true, 
  transform(_doc, json){
    // Second parameter passed is the json object that is due to be sent back to the user
    //we want to remove the password from it
    delete json.password
    return json
  }
})

// VIRTUAL FIELDS
userSchema
  .virtual('passwordConfirmation') 
  .set(function(value){ 
    this._passwordConfirmation = value
  })

// CUSTOM PRE VALIDATION
userSchema
  .pre('validate', function(next){ 
    if (this.isModified('password') && this.password !== this._passwordConfirmation){
      this.invalidate('passwordConfirmation', 'Does not match password field')
    }
    next()
  })

// CUSTOM PRE SAVE
userSchema
  .pre('save', function(next){ 
    if (this.isModified('password')){
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
    }
    next()
  })

userSchema.methods.validatePassword = function(plainPassword){
  return bcrypt.compareSync(plainPassword, this.password)
}

userSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('User', userSchema)