import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String, // Gonna use cloudnary url here
        required: true, // Apatoto required diye rakhlam (as per the db design)
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        { // Not that much big, to make a saperate schema. So, doing inplace.
            type: Schema.Types.ObjectId,
            ref: "Video",
        },
    ],
    password: {
        type: String,
        required: [true, "Password is Required"],
    },
    refreshToken: {
        type: String,
        
    }


},{timestamps: true})


export const User = mongoose.model("User", userSchema)