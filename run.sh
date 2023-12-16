#!/bin/sh

set -e

(cd frontend && npm run build)
uvicorn main:app --host 0.0.0.0 --port 8080 --reload
