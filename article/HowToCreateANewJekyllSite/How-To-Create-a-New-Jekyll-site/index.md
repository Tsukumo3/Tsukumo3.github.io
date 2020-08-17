---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# GitHubPagesにてJekyllでMarkdownの記事を作る方法

参考: [setting-up-your-github-pages-site-locally-with-jekyllV](https://docs.github.com/ja/enterprise/2.14/user/articles/setting-up-your-github-pages-site-locally-with-jekyll)

# 必要条件

1. Ruby 2.1.0以降がインストールします。
```
$ ruby --version
> ruby 2.X.X
```

2. Bundlerをインストールします。
```
$ gem install bundler
# Installs the Bundler gem
```
installされていない場合は下記のサイトよりinstallを行ってください
- [Rubyのinstall](https://www.ruby-lang.org/en/downloads/)

# Jekyllサイトのローカルリポジトリを作成する

git clone *URL* なり git init *REPOSITORY-NAME*　なりで
作成してください

# Bundlerを使用してJekyllをインストールする

1. Gemfileを作成します。
```
$ touch Gemfile
```
2. Gemfileを開き、以下の文章を追加してください
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

# Jekyllサイトファイルを生成する

1. ローカルコンピュータにJekyllサイトがない場合は、新しいディレクトリにJekyllテンプレートサイトを作成します。
```
$ bundle exec jekyll _3.3.0_ new NEW-JEKYLL-SITE-REPOSITORY-NAME
> New jekyll site installed in /Users/octocat/NEW-JEKYLL-SITE-REPOSITORY-NAME.
```

2. 新しいサイトディレクトリに移動します。
```
$ cd NEW-JEKYLL-SITE-REPOSITORY-NAME
```

3. Gemfileで、#この行の先頭にあるを削除します。
```
$ gem "github-pages", group: :jekyll_plugins
```

# リポジトリに反省する

先ほど、git init（初期化） -> git remote （接続）でもいいですし
cloneした方は git add .でステージングし、コメントでcommmitして、pushしてください

以上で完成です。

リンクの指定はディレクトリを指定してください。またサイトを編集する際はindex.mdを編集します。
例えば本ページは

[https://tsukumo3.github.io/article/HowToCreateANewJekyllSite/How-To-Create-a-New-Jekyll-site/](https://tsukumo3.github.io/article/HowToCreateANewJekyllSite/How-To-Create-a-New-Jekyll-site/)

今回はサイトを作る方法をまとめてみました。
テンプレートのサイトの中にもgemファイルが入っているので、テンプレートのディレクトリをコピーすれば使えます。