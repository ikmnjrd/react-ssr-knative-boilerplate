
# セットアップ
## git clone
`# git clone git@github.com:ikmnjrd/react-ssr-knative-boilerplate.git`

`# rm -rf .git/`

`# npm install`

## Docker確認
`# docker build . -t {container_name}` 

`# docker run -it --rm {container_name} bash`

# アプリをコンテナ化して Container Registry にアップロードする
## 適当にプロジェクトを作成
`# gcloud projects create プロジェクトID --name プロジェクト名`

## Dockerfile を含むディレクトリから次のコマンドを実行し、Cloud Build を使用してコンテナ イメージをビルドします
`# gcloud builds submit --tag asia.gcr.io/PROJECT-ID/helloworld`

## Cloud Run へのデプロイ
`# gcloud run deploy helloworld --image asia.gcr.io/PROJECT-ID/helloworld --region asia-northeast1 --platform managed --allow-unauthenticated`

# 課題
Cloud runでのdeploy時、.gitignoreで指定されたファイル/ディレクトリだと、デプロイに失敗した。デプロイ時の `scripts: {"start": "node public/server.js"}` がパスの解決ができずエラーでデプロイ失敗する。