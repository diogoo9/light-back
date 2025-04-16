/* import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsDOcNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsDOcNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          const numbers = value.replace(/^\D+/g, '');
          console.log(numbers);

          return false;
          /*       return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            value.length > relatedValue.length
          ); 
        },
      },
    });
  };
}
 */

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsDOcNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsDOcNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const docNumbers = value?.replace(/[^0-9]/g, '');
          if (docNumbers.length == 11) {
            var soma = 0;

            for (var i = 1; i <= 9; i++) {
              soma += parseInt(docNumbers.substring(i - 1, i)) * (11 - i);
            }

            var resto = soma % 11;

            if (resto === 10 || resto === 11 || resto < 2) {
              resto = 0;
            } else {
              resto = 11 - resto;
            }

            if (resto !== parseInt(docNumbers.substring(9, 10))) {
              return false;
            }

            soma = 0;

            for (var i = 1; i <= 10; i++) {
              soma += parseInt(docNumbers.substring(i - 1, i)) * (12 - i);
            }
            resto = soma % 11;

            if (resto === 10 || resto === 11 || resto < 2) {
              resto = 0;
            } else {
              resto = 11 - resto;
            }

            if (resto !== parseInt(docNumbers.substring(10, 11))) {
              return false;
            }

            return true;
          }

          if (docNumbers.length == 14) {
            var CNPJValidationDigits = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
            for (
              var i = 0, n = 0;
              i < 12;
              n += docNumbers[i] * CNPJValidationDigits[++i]
            );
            if (docNumbers[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

            for (
              var i = 0, n = 0;
              i <= 12;
              n += docNumbers[i] * CNPJValidationDigits[i++]
            );
            if (docNumbers[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false;

            return true;
          }

          return false; // you can return a Promise<boolean> here as well, if you want to make async validation
        },
      },
    });
  };
}
