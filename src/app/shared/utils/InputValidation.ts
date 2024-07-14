import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export class InputValidation {
  //french
  static frenchRegex = new RegExp(/^[a-zA-ZÀ-ÿ\s'’-]+$/);
  static frenchNumericRegex = new RegExp(/^[a-zA-ZÀ-ÿ\s0-9'’-]+$/);
  static frenchNumericSpacesRegex = new RegExp(/^[a-zA-ZÀ-ÿ\s0-9'’-]+$/);
  static frenchNumericWithspecialRegex = new RegExp(
    /^[a-zA-ZÀ-ÿ\s0-9'’\-\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\"]+$/
  );

  
  static frenchWithspecialRegex = new RegExp(
    /^[a-zA-ZÀ-ÿ\s'’\-\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\"]+$/
  );
  //arabic regx
  static ArabicRegx = new RegExp(/^[\u0600-\u06FF ]+$/);
  static ArabicOrEnglishRegx = new RegExp(/^[\u0600-\u06FFa-zA-Z\s]+$/);

  static isArabicInputValid(input: string): boolean {
    return this.ArabicRegx.test(input);
  }
  static ArabicWithspecialRegx = new RegExp(
    /^[\u0600-\u06FF\s\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\’\"]+$/
  );
  static ArabicNumericWithspecialRegx = new RegExp(
    /^[\u0600-\u06FF\u0750-\u077F\s0-9\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\’\"]+$/
  );
  //English regx
  static EnglishWithspecialwithoutspaceRegx = new RegExp(
    /^[a-zA-Z0-9\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\’\"]+$/
  );
  static EnglishRegx = `[A-Za-z][A-Za-z ]*`;
  static EnglishWithspecialRegx = new RegExp(
    /^[a-zA-Z\s\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\’\"]+$/
  );
  static EnglishNumericRegx = `[a-zA-Z0-9 ]*`;
  static EnglishNumericSpacesRegx = /^[a-zA-Z0-9\s]*$/;

  static ArabicNumericRegx = `^[\u0600-\u06FF0-9]+$`;
  static ArabicNumericSpacesRegx = /^[\u0600-\u06FF0-9\s]+$/;

  static EnglishNumberWithspecialRegx = new RegExp(
    /^[a-zA-Z\s0-9\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\’\"]+$/
  );
  static EnglishEditor = new RegExp(/^[A-Za-z\s\<\>\/\&nbsp\;\<br\>[0-9]*$/);
  static englishPattern = new RegExp(
    /^[A-Za-z\s\<p\>\>\/\<\\p\>\&nbsp\;\<br\>s0-9]*$/
  );

  static ArabicEditor = new RegExp(
    /^[\u0600-\u06FF\u0750-\u077F\s\<p\>\>\/\<\\p\>\&nbsp\;\<br\>s0-9]+$/
  );

  //new RegExp("^[\\u0600-\\u06FF\\u0750-\\u077F\\s\<\\>\/]*$");

  static frenchEditor = new RegExp(/^[a-zA-ZÀ-ÿ\s\<\>\/]*$/);

  //numbers
  static onlyNumberRegx = new RegExp(/^\d+$/);
  static onlyNumberWithPlusRegx = new RegExp(/^(\+?\d+)$/);

  //url
  static urlRegex = new RegExp(
    /^((http|https):\/\/)?([a-zA-Z0-9]+[.-]?)+[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([\/?#]\S*)?$/
  );
  //mobile and whatsapp
  static MobileEgpattern = new RegExp(/^(01\d{9}|1\d{9})$/);
  static MobileKSApattern = new RegExp(/^(5\d{8})$/);

  static MobileKSAWhatsApppattern = new RegExp(
    /^(5\d{8}|11\d{7}|12\d{7}|13\d{7}|14\d{7}|15\d{7}|16\d{7}|17\d{7}|18\d{7}|19\d{7})$/
  );

  // static MobileKSAAndEgpattern = new RegExp(/^(5\d{8}|11\d{7}|12\d{7}|13\d{7}|14\d{7}|15\d{7}|16\d{7}|17\d{7}|18\d{7}|19\d{7}|1\d{9})$/);

  static MobileGeneralApattern = new RegExp(/^(\d{8,20})$/);

  static AltMobileEgpattern = new RegExp(/^01[0125][0-9]{8}$/);
  static AltMobileKSApattern = new RegExp(
    /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/
  );

  static whatsApp = new RegExp(/^(\+?\d*)$/);
  static whatsAppCode = new RegExp(/^(\+?\d{0,4})$/);

  static FacebookUrlRegex = new RegExp(
    /^(https|http)?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9.-]+\/?$/
  );
  static twitterUrlRegex = new RegExp(
    /^(https|http)?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/
  );
  static instagramUrlRegex = new RegExp(
    /^(https|http)?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9_]+\/?$/
  );
  static youtubeUrlRegex = new RegExp(
    /^(https|http)?:\/\/(www\.)?youtube\.com\/(watch\?v=|channel\/|user\/)[a-zA-Z0-9_-]+(\/.*)?$/i
  );
  static linkedinUrlRegex = new RegExp(
    /^(https|http)?:\/\/(www\.)?linkedin\.com\/(in|company)\/[a-zA-Z0-9._-]+(\/.*)?$/i
  );
  static promocodeRegex = new RegExp(
    /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/
  );
  // /((\d){21}(,)?){1,4}((\d){21})+/g
  static dontAcceptHash = new RegExp(/^[^#]*$/);
  static validEmail = new RegExp(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  );
  static complexPassword = new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&'()*+,-./:;<=>?@\[\]^_`{|}~])[A-Za-z\d!#$%&'()*+,-./:;<=>?@\[\]^_`{|}~]{8,}$/
  );
  static internationalPhoneNumber = new RegExp(
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/
  );

  

  static capitalSmallValidation(c: FormControl) {
    return c.value.match('^(?=.*[a-z])(?=.*[A-Z])^[^]+$')
      ? null
      : { capital_small: true };
  }
  static OneNumberValidation(c: FormControl) {
    return c.value.match('^(?=.*[0-9])^[^]+$') ? null : { oneNumber: true };
  }

  static SpecialCharValidation(c: FormControl) {
    return c.value.match(/["!#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g)
      ? null
      : { SpecialChar: true };
  }
}

export function ageRangeValidator(
  control: AbstractControl
): ValidationErrors | null {
  const birthDate = control?.value;
  if (birthDate != null) {
    const age = calculateAge(birthDate);
    if (age < 22 || age > 100) {
      return { ageRange: true };
    }
  }
  return null;
}
export function RangeValidator(
  control: AbstractControl
): ValidationErrors | null {
  const formGroup = control as FormGroup;
  const startControl = formGroup.get('rentalAppreciationRatePercentageFrom');
  const endControl = formGroup.get('rentalAppreciationRatePercentageTo');

  if (startControl && endControl) {
    const start = startControl.value;
    const end = endControl.value;

    if (start && end && start > end) {
      return { Range: true };
    }
  }
  // else
  // if (startControl && !endControl) {
  //   return {endMissing: true };

  // }

  // else
  // if (!startControl && endControl) {
  //   return { startMissing: true };

  // }
  return null;
}

function calculateAge(birthDate: Date): number {
  const today = new Date();
  const diff = today.getTime() - birthDate.getTime();
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  return age;
}
export enum ChipsType {
  Arabic,
  English,
  french,
}
export function ExtentionValidator(extention): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value;

    if (file) {
      const fileExten = file.split('.')?.pop();
      if (fileExten != extention) {
        return { extentionError: true };
      }
    }
    return null;
  };
}
export function ExtentionValidatorList(extentionlst: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | any => {
    const file = control.value;
    if (file) {
      const fileExten = file.split('.')?.pop();
      if (!extentionlst.includes(fileExten)) {
        return { extentionError: true };
      }
      return null;
    }
  };
}

// export function maxFileSizeValidator(maxSizeInKb: number, fileSizeInKb): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const file = control.value;
//     if (file) {
//       fileSizeInKb = fileSizeInKb / 1024;
//       if (fileSizeInKb > maxSizeInKb) {
//         return { maxFileSize3M: true };
//       }
//     }
//     return null;
//   };
// }

export function maxFileSizeValidator(maxSizeInMB: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const files = control.value;
    let allFileSizeInMB = 0;

    if (files) {
      if (Array.isArray(files)) {
        for (const file of files) {
          const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to megabytes
          allFileSizeInMB += fileSizeInMB;
        }
      } else {
        const fileSizeInMB = files.size / (1024 * 1024); // Convert bytes to megabytes
        allFileSizeInMB += fileSizeInMB;
      }

      console.log('all size', allFileSizeInMB);

      if (allFileSizeInMB > maxSizeInMB) {
        return { maxFileSize: true };
      }
    }

    return null;
  };
}

export function maxFileSizeValidator5M(
  maxSizeInKb: number,
  fileSizeInKb
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const file = control.value;
    if (file) {
      fileSizeInKb = fileSizeInKb / 1024;
      if (fileSizeInKb > maxSizeInKb) {
        return { maxFileSize: true };
      }
    }
    return null;
  };
}

export function chipsValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control?.value != null) {
      let values = control.value;
      let hasError = false;
      values?.forEach((val) => {
        if (InputValidation.isArabicInputValid(val) == false) {
          hasError = true;
        }
      });

      if (hasError) return { pattern: true };
    }

    return null;
  };
}

export function chipsEnValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control?.value != null) {
      let values = control.value;
      let hasError = false;
      values?.forEach((val) => {
        if (new RegExp(InputValidation.EnglishRegx).test(val) == false) {
          hasError = true;
        }
      });

      if (hasError) return { pattern: true };
    }

    return null;
  };
}

export function chipsFrValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control?.value != null) {
      let values = control.value;
      let hasError = false;
      values?.forEach((val) => {
        if (InputValidation.frenchRegex.test(val) == false) {
          hasError = true;
        }
      });

      if (hasError) return { pattern: true };
    }

    return null;
  };
}
export function GetDate(date) {
  try {
    // if (Date.parse(date) != null) {

    // }
    const dateWithoutTimezone = new Date(
      date.getTime() - date.getTimezoneOffset() * 60 * 1000
    );

    return dateWithoutTimezone.toISOString();
  } catch {
    return date;
  }
}
