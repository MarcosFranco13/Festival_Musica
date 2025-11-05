import {src, dest, watch} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css(done){
    src('src/scss/app.scss')//Ubicamos el archivo
         .pipe(sass()) //aplica sass
         .pipe(dest('build/css')) //Destino donde almacenamos el archivo

    done()
}

export function dev(){
    watch('src/scss/app.scss', css)//indicamos el archivo que este en observación y que funcion se ejecute cuando existan cambios
}