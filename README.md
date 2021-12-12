

git clone git@~~~~

git 再設定

npm install


docker build . -t {container_name}


起動確認
docker run -it --rm {container_name} bassh

# アプリをコンテナ化して Container Registry にアップロードする
## 適当にプロジェクトを作成
https://qiita.com/masaaania/items/7a83c5e44e351b4a3a2c

## Dockerfile を含むディレクトリから次のコマンドを実行し、Cloud Build を使用してコンテナ イメージをビルドします
`# gcloud builds submit --tag gcr.io/phrasal-door-334816/helloworld`

## Cloud Run へのデプロイ
`# gcloud run deploy --image gcr.io/PROJECT-ID/helloworld --platform managed`

サービス名やリージョンを聞かれる。
```
Service name (helloworld):  
API [run.googleapis.com] not enabled on project [823424291688]. Would you like to enable and retry (this will 
take a few minutes)? (y/N)?  y

Enabling service [run.googleapis.com] on project [823424291688]...

Please enter your numeric choice:  3


```

# 課題
Cloud runでのdeploy時、server.jsをpublicフォルダに入れた状態だと `scripts: {"start": "node public/server.js"}` がパスの解決ができずエラーでデプロイ失敗する。

publicというディレクトリ名だと何故か公開できない？
publicなり、buildなりのフォルダ名を.gitignoreしておくとデプロイ失敗するっぽい？