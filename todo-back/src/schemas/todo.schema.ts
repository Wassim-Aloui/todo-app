import { Schema , Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Todo {
    @Prop({ required: true })
    title: string;

    @Prop()
    description: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo)