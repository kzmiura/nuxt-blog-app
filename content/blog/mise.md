---
publishedOn: 2025-07-08
tags:
  - mise
  - cli
---

# `mise` で開発ツールを管理する

`node`, `ruby`, `python` を `mise` で管理する。

## インストール

インストールは `curl` を `sh` にパイプするやつ。
気になるなら先にスクリプトを確認すると良い。

```bash
curl https://mise.run | sh
```

デフォルトでは `~/.local/bin/mise` にインストールされる。
詳しくは[公式のインストールガイド](https://mise.jdx.dev/installing-mise.html)を参照。

## アクティベート

使用に際して `mise activate` が必要。
お使いのシェルに応じて rc ファイルに追記する。

`zsh` の場合は以下を実行。

```bash
echo 'eval "$(mise activate zsh)"' >> "${ZDOTDIR:-$HOME}/.zshrc"
```

その他のシェルは [https://mise.jdx.dev/installing-mise.html#shells] を参照。

## 使ってみる

グローバルな `node` をインストールするには、

```bash
mise u -g node@22
```

これだけ。
簡単すぎ。

`mise u` は `mise use` のエイリアス。
`-g` オプションは設定をグローバルに適応する。
渡さない場合はワーキングディレクトリに `mise.toml` が生成され、直下のディレクトリにのみ設定が適応される。

## Ruby を管理する

`ruby` は内部で `ruby-build` を使用しているらしいので、依存ライブラリのインストールが必要。
詳しくは [`ruby-build` の Wiki](https://github.com/rbenv/ruby-build/wiki#suggested-build-environment) を参照。

```bash
mise u ruby@3
```
