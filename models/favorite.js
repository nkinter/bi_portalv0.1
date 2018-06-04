const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoriteSchema = mongoose.Schema(
    {
        reportName: String,
        reportID: Number,
        _user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
);

mongoose.model('favorites', favoriteSchema);