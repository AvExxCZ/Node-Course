const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://avexxcz:avexxcz7708@cluster0.g92tb.mongodb.net/")
  .then(() => console.log("Database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create user model
const User = mongoose.model('User', userSchema)

runQueryExamples();

async function runQueryExamples(){
    try{

        //! create a new document
        const newUser = await User.create({
            name: "Updated User",
            email: "updateduser@gamil.com",
            age: "75",
            isActive: true,
            tags: ["developer"],
        })
        
        console.log('Created new user', newUser);

        //! get all users from the database
        // const allUsers = await User.find();
        // console.log(allUsers);

        //! get a user with isActive: flase
        // const getUserOfActiveFalse = await User.find({isActive : false})
        // console.log(getUserOfActiveFalse);

        //! get the first user with that name
        // const getFingerUser = await User.findOne({name : "David Hoffinger"});
        // console.log(getFingerUser);

        //! get the user that we created now
        // const getLastCreatedUserByUserId = await User.findById(newUser._id)
        // console.log(getLastCreatedUserByUserId);

        //! get specific values from each user
        // const selectedFields = await User.find().select("name email -_id");
        // console.log(selectedFields);

        //! get the five users, but skip the first user (user 2 - 6)
        // const limitedUsers = await User.find().limit(5).skip(1)
        // console.log(limitedUsers);

        //! get all users and sort them by age ( 1 or -1 )
        // const sortedUsers = await User.find().sort({age: -1});
        // console.log(sortedUsers);

        //! get the number of users with isActive: true
        // const countDocuments = await User.countDocuments({isActive: true});
        // console.log(countDocuments);
 
        //! imidietly delete the user that we created now
        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log('deleted user ->', deletedUser);

        //! imidietly update the user that we created now
        const updateUser = await User.findByIdAndUpdate(newUser._id, {
            $set : {age: 100}, $push : {tags: "updated"}
        }, {new: true});
        console.log('updated user', updateUser);



    } catch(e){
        console.log('Error ->', e);

    } finally{
        await mongoose.connection.close()
    }
}