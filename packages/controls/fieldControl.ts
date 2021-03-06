import { FormControlOptions } from "../types/control";

import { AbstractControl } from "./abstractControl";

export class FieldControl<V = any> extends AbstractControl<V> {
  constructor(value: V, options: FormControlOptions = {}) {
    super();
    const { disabled = false, validators = [] } = options;
    this.initBasicParams(value, { disabled, validators });
  }

  setValue = (value: any) => {
    /**
     * start
     * distinct value change
     *
     * decide to not put this logic in valueChange pipeline, two reason as below
     * 1.cannot work when call setValue the first time
     * 2.will trigger the diff fn in each subscribe place, it is redundant
     *
     * Same thing with errorsChange and validChange
     */
    if (value === this.value) {
      return;
    }
    /**
     * end
     */
    this.valueSubject$.next(value);
  };

  protected checkValid = () => !this.errors;
}
