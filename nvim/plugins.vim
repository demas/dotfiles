call plug#begin()
Plug 'plasticboy/vim-markdown'
Plug 'SidOfc/mkdx' " nice extra's working with markdown documents
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() } }

" color themes
Plug 'liuchengxu/space-vim-theme'
call plug#end()

