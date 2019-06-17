TARGETS := spark spark-angular spark-react
.PHONY : nuke clean install build

nuke: # remove all node modules and re-install. For new users or last resort in debug workflow
	make clean; make install;

clean: # get rid of all node_modules in distributable folders
	$(foreach var,$(TARGETS), cd ./spark/manifests/$(var); rm -rf node_modules)

install: # (re) install all dependencies for all distributable folders
	$(foreach var,$(TARGETS), cd ./spark/manifests/$(var); npm install)

build:  # gotta build -em all!
	$(foreach var,$(TARGETS), cd ./spark/manifests/$(var); npm run build)