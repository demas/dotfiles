" set theme
try
        colorscheme space_vim_theme
catch
endtry

augroup specify_filetype
    autocmd!
    autocmd BufRead,BufNewFile *.md set filetype=markdown
    autocmd BufRead,BufNewFile *.txt set filetype=text
augroup END

" Enable spell-checking for certain files
" autocmd FileType text,markdown setlocal spell

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

" Automatically re-read file if a change was detected outside of vim
set autoread

" no case-sensitive search unless uppercase is present
set ignorecase
set smartcase

" Enable mouse scroll
set mouse=a

" Matching braces/tags
set showmatch

" Share yank buffer with system clipboard
set clipboard=unnamedplus

" Show next 3 lines while scrolling.
if !&scrolloff
    set scrolloff=3
endif

" Show next 5 columns while side-scrolling.
if !&sidescrolloff
    set sidescrolloff=5
endif

" Jump to the last known position when reopening a file.
if has("autocmd")
  au BufReadPost * if line("'\"") > 0 && line("'\"") <= line("$")
    \| exe "normal! g'\"" | endif
endif
