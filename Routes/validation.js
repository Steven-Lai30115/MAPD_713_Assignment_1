const Joi = require("joi")

const postImageValidation = (data) => {
    const schema = Joi.object({
        imageID: Joi.string().required(),
        imageString: Joi.string().required(),
    });
    
    return schema.validate(data);
}

module.exports.postImageValidation =  postImageValidation;