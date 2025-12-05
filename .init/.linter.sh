#!/bin/bash
cd /home/kavia/workspace/code-generation/b-se-balia-news-portal-220458-220467/b_se_balia_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

