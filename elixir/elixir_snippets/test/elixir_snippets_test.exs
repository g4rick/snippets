defmodule ElixirSnippetsTest do
  use ExUnit.Case
  doctest ElixirSnippets

  test "greets the world" do
    assert ElixirSnippets.hello() == :world
  end
end
