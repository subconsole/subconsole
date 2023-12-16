#!/bin/sh

set -e

npm run build
uvicorn main:app --reload
