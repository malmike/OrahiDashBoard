import { FormGroup } from '@angular/forms';

export function CompareItemsValidator(itemKey: string, confirmItemKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let item = group.controls[itemKey];
    let confirmItem = group.controls[confirmItemKey];

     return item.value === confirmItem.value ? null : { mismatchedItems: true };
     
  }
}