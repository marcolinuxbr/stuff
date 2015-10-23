#!/bin/bash
find -maxdepth 1 -type f -name \*.\* | shuf > playlist && mplayer -playlist playlist ; rm playlist



