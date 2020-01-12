" Install vim-plugged if not already installed
if empty(glob('~/.local/share/nvim/site/autoload/plug.vim'))
    silent !curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs
        \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif
call plug#begin('~/.vim/plugged')

" Mardown
Plug 'plasticboy/vim-markdown'
Plug 'SidOfc/mkdx' " nice extra's working with markdown documents
Plug 'iamcco/markdown-preview.nvim', { 'do': { -> mkdp#util#install() } }

" Custom start page
Plug 'mhinz/vim-startify'

" NERDTree
Plug 'scrooloose/nerdtree'
Plug 'Xuyuanp/nerdtree-git-plugin'
Plug 'tiagofumo/vim-nerdtree-syntax-highlight'

" color themes
Plug 'liuchengxu/space-vim-theme'
call plug#end()

