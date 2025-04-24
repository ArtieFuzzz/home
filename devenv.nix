{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  languages.javascript.enable = true;
  languages.typescript.enable = true;

  git-hooks.hooks = {
    alejandra.enable = true;
    biome.enable = true;
  };
}
