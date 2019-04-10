# Repo-studio
Tool used to store all useful knowledge about programing.

# Start docker-compose:
docker-compose up -d --build

# Test client docker file

  - Build: `docker build -t repo-studio_client .`
  - Run: `docker run -it \
          -v ${PWD}:/usr/app \
          -v /usr/app/node_modules \
          -p 3000:3000 \
          --rm \
          repo-studio_client`