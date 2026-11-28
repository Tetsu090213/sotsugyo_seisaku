#!/bin/bash
set -e

# Rails特有の server.pid 残留エラーを防ぐために削除
rm -f /app/tmp/pids/server.pid

# DockerfileのCMDで渡されたコマンド（rails serverなど）を実行
exec "$@"


# このファイルの役割（イメージ）

# RailsをDockerで動かしていると、前回終了したときの「起動中でしたよ」という
# メモ（server.pid）がゴミとして残り、次に起動しようとしたときに 「すでにサーバーが動いているので起動できません！」とエラーになる ことがあります。
# そのゴミファイルを起動前に自動で掃除してくれるお守りファイルです。