"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaValidator = AreaValidator;
const class_validator_1 = require("class-validator");
function AreaValidator(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'AreaValidator',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return false;
                },
            },
        });
    };
}
//# sourceMappingURL=area.validator.js.map