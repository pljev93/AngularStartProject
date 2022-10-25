import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[addProductBgCategory]'
})
export class ProductBgCategoryDirective {
  @Input('category') category: string
  @HostBinding('style.background-color') public background: string;
  @HostBinding('style.opacity') public opacity: string;



  ngOnInit() {
    this.addBg(this.category);
  }

  addBg(category = '') {

    switch (category) {
      case 'men\'sclothing':
        this.background = '#FFA07A';
        break;
      case 'jewelery':
        this.background = '#00FF00';
        break;
      case 'electronics':
        this.background = '#008B8B';
        break;
      case 'women\'sclothing':
        this.background = '#00FFFF';
        break;
      default:
        this.background = '#C0C0C0';
        break;
    }
  }

}
