#!/bin/sh

set -e

(cd frontend && npm run build)
uvicorn main:app --reload
