import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform 
{

  transform(value: string, args?: Array<string>): string 
  {

          let replace = "*";
          let arrayTexto = value.split(' ');
          for (let palabra in args) 
          {
            for (let palabra2 in arrayTexto) 
            {
              if (args[palabra] == arrayTexto[palabra2]) 
              {
                let valor = arrayTexto[palabra2].length;
                arrayTexto[palabra2] = replace.repeat(valor);
              }
            }
          }
    return arrayTexto.join(' ');
  }
}
