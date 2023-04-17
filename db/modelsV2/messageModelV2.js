import { Schema, SchemaType, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "UserDBV2",
      required: true,
    },
    receiver: {
      type: Schema.Types.ObjectId,
      ref: "UserDBV2",
      required: true,
    },
    messages: [
      {
        sender: {
          type: Schema.Types.ObjectId,
          ref: "UserDBV2",
          required: true,
        },
        receiver: {
          type: Schema.Types.ObjectId,
          ref: "UserDBV2",
          required: true,
        },
        senderUsername: {
          type: String,
        },
        senderEmail: {
          type: String,
        },
        senderImage: {
          type: String,
        },
        receiverUsername: {
          type: String,
        },
        receiverEmail: {
          type: String,
        },
        receiverImage: {
          type: String,
        },
        body: {
          type: String,
          required: true,
        },
        image: {
          type: String,
        },
        react: {
          type: String,
          enum: ["none", "like", "love", "dislike", "angry", "sad"],
          default: "none",
        },
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
  },
  { timestamps: true }
);

const MessageDBV2 = models.MessageDBV2 || model("MessageDBV2", messageSchema);

export default MessageDBV2;