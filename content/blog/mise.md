---
published: 2025-07-08
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

`zsh` の場合は、

```bash
echo 'eval "$(mise activate zsh)"' >> "${ZDOTDIR:-$HOME}/.zshrc"
```

その他のシェルは [https://mise.jdx.dev/installing-mise.html#shells] を参照。
