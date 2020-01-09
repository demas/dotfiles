call plug#begin()
Plug 'plasticboy/vim-markdown'
Plug 'SidOfc/mkdx' " nice extra's working with markdown documents
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() } }

" color themes
Plug 'liuchengxu/space-vim-theme'
call plug#end()

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

" Smart way to move between windows
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-h> <C-W>h
map <C-l> <C-W>l


" markdown
let g:vim_markdown_folding_disabled = 1
let g:vim_markdown_toc_autofit = 1
set conceallevel=2
set concealcursor=nc
let g:vim_markdown_conceal_code_blocks = 0

let g:mkdx#settings = { 'map': { 'prefix': '<leader>' } }

autocmd FileType markdown map <leader>t :Toc<CR>
