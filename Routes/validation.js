const Joi = require("joi")

const postImageValidation = (data) => {
    const schema = Joi.object({
        imageID: Joi.number().required(),
        name: Joi.string().required(),
        url: Joi.string().required(),
        size: Joi.string().required(),
    });

    console.log(data);
    return schema.validate(data);
}

module.exports.postImageValidation =  postImageValidation;