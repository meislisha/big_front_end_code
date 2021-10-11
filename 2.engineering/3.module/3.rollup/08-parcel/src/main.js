import $ from 'jquery';
import foo from './foo';
import icon from './icon.png';
import './style.scss';

foo.bar();

$('body').append('<h1>parcel</h1>');
$('body').append(`<img src=${icon}>`)
