export ANSIBLE_CONFIG="$(pwd)/.ansible/ansible.cfg" && \
ansible-galaxy install --force --role-file .ansible/roles/requirements.local.yaml && \
ansible-playbook .ansible/run.yaml -i .ansible/inventories/local/hosts --vault-id ~/.tokens/vault.txt;
