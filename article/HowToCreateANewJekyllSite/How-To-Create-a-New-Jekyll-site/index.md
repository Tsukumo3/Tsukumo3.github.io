---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
# [Tsukumo3.github.io](https://tsukumo3.github.io/article)

# GithubPagesにてJekyllでMarkdownの記事を作る方法
## すぐ忘れるのでメモっておきます。

参考にしたサイト [Setting up your GitHub Pages site locally with Jekyll
](https://docs.github.com/ja/enterprise/2.14/user/articles/setting-up-your-github-pages-site-locally-with-jekyll)


上サイトでは、一番最前面のサイト"index"をMarkdownで書く際のやり方について書いてまとめてあります。

本サイトではJekyll(ジキル)で記事を書き、公開するところまでを目標としています。

# 必要条件
- Rubyのinstall
```
$ ruby --version
> ruby 2.X.X
```
- Bundlerのinstall
```
$ gem install bundler
# Installs the Bundler gem
```
Rubyがinstallされてない場合はinstallを行ってください
- [Ruby 2.1.0以降をインストール](https://www.ruby-lang.org/en/downloads/)

# Bundlerを使用してJekyllをインストールする

1. ローカルリポジトリにGemfileがない場合はGemfileを作成します。
```
$touch Gemfile
```
2. Gemfileを開き次の内容をGemfileに書き込み、保存します。
```
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```
3. GitHub Enterprise Pages gemからJekyllおよびその他の依存関係をインストールします。
```
$ bundle install
> Fetching gem metadata from https://rubygems.org/............
> Fetching version metadata from https://rubygems.org/...
> Fetching dependency metadata from https://rubygems.org/..
> Resolving dependencies...
```
#  Jekyllサイトファイルを作成する

ここまでJekyllを扱うための環境構築をしてきました。ここから実際に記事を生成する作業です。

1. ローカルコンピュータにJekyllサイトがない場合は、新しいディレクトリにJekyllテンプレートサイトを作成します。
```
$ bundle exec jekyll _3.3.0_ new NEW-JEKYLL-SITE-REPOSITORY-NAME
> New jekyll site installed in /Users/octocat/NEW-JEKYLL-SITE-REPOSITORY-NAME.
```
2. 新しいサイトディレクトリに移動します。
```
$ cd NEW-JEKYLL-SITE-REPOSITORY-NAME
```
3. Gemfileで、#この行の先頭にあるを削除します。18行目当たりかもしれないです。
```
# gem "github-pages", group: :jekyll_plugins
の #　部分を削除
変更前：# gem "github-pages", group: :jekyll_plugins
変更後：gem "github-pages", group: :jekyll_plugins
```

# 最後に変更をリポジトリに反映させる

1. 変更を追加またはステージングします。
```
$ git add .
```
2.コメントで変更をコミットします。
```
$ git commit -m "updated site"
```

サイトにアクセスするにはそのディレクトリ名を指定すれば良いです。
今回はテンプレートファイルを生成するために
Gemfileを作ってからテンプレートを生成したので、次のようなリンクになります。

[https://tsukumo3.github.io/article/HowToCreateANewJekyllSite/How-To-Create-a-New-Jekyll-site](https://tsukumo3.github.io/article/HowToCreateANewJekyllSite/How-To-Create-a-New-Jekyll-site)

以前最初にテストしたリンクだとこのようになります

[https://tsukumo3.github.io/article/NEW-JEKYLL-SITE-REPOSITORY-NAME/](https://tsukumo3.github.io/article/NEW-JEKYLL-SITE-REPOSITORY-NAME/)

# 最後に簡易用語解説 - 正確じゃない可能性があります

## Rubyとは

Rubyとはオープンソースの動的なプログラミング言語で、 シンプルさと高い生産性を備えています。 エレガントな文法を持ち、自然に読み書きができます。 

## Bundlerとは

bundlerとは、gemのバージョンやgemの依存関係を管理してくれるgemです。bundlerを使うことで、複数人での開発やgemのバージョンが上がってもエラーを起こさずに開発できます。 

## Gemとは

まずは、gemとはいったい何なのかについて説明します。Rubyにおけるgemは以下の2つの意味を指すことがあります。

- RubyGemsが公開しているRubyのパッケージのこと
- それらのパッケージを管理するパッケージ管理システムの名前


## Jekyllとは

Jekyll（ジキル）は静的サイトの生成を行うための、RubyGemsで配布されているRuby製のツールです。