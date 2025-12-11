import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile: {
        type: String, // From cloudnary url
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: { // This is not from user. It will be from cloudnary 
                // as soon as a video will be uploaded
        type: Number,
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },


}, {timestamps: true})

export const Video = mongoose.model("Video", videoSchema)
