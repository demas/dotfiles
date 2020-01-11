" set theme
try
        colorscheme space_vim_theme
catch
endtry

" enable syntax highlighting
syntax on

" enable filetype plugins
filetype plugin on
filetype indent on

" set utf8 as standard encoding
set encoding=utf8

set guifont=JetBrains\ Mono:h13
set lines=35 columns=50"

set ai " autoidenting new lines
set si " smart indent
set wrap " wrap lines
set lbr " ensurs word-wrap does not split words

" turn backup off, since git
set nobackup
set nowb
set noswapfile

