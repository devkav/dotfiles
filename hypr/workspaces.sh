#!/bin/bash

reverse=0
workspace=$(hyprctl activeworkspace | grep "workspace ID" | awk '{print $3}')
new_workspace=-1

if [ "$1" == "--reverse" ]; then
    reverse=1
fi

if [ $reverse == 0 ]; then
    if (($workspace == 5)); then
        new_workspace=1;
    elif (($workspace >= 10)); then
        new_workspace=6;
    else
        new_workspace=$((workspace + 1))
    fi
else
    if (($workspace == 1)); then
        new_workspace=5;
    elif (($workspace == 6)); then
        new_workspace=10;
    else
        new_workspace=$((workspace - 1))
    fi
fi


hyprctl dispatch workspace $new_workspace
