var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */
elixir.config.sourcemaps = false;
elixir(function(mix) {
    //mix.styles(["fonts.less","style.less","errors.less","forms.less","responsive.less"],'public/theme/css/all.css').version("theme/css/all.css");
    mix.styles(["fonts.less","main.less","header.less","menu.less","slider.less","content.less","view.less","footer.less","radioplayer.less","responsive.less"],'public/theme/css/all.css');
});
