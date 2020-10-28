#!/bin/bash
if ! screen -list | grep -q "queue"; then
    screen -d -m -S queue
    screen -S queue -X stuff "cd ~/srna/api^M"
fi

cmd="bash informatics/run_pipeline.sh"
echo $cmd
for arg in "$@"
do
	echo $arg
	cmd="${cmd} ${arg}" 
	echo $cmd
done
cmd="${cmd}^M"
screen -S queue -X stuff "$cmd"