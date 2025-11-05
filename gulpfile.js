import {src, dest} from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

export function css(done){
    src('src/scss/app.scss')//Ubicamos el archivo
         .pipe(sass()) //aplica sass
         .pipe(dest('build/css')) //Destino donde almacenamos el archivo

    done()
}