defmodule TaskAll do
  @moduledoc """
  类似 Promise.all
  """

  def task_all(tasks) do
    task_list =
      Enum.map(tasks, fn task ->
        Task.async(task)
      end)

    tasks_with_result = Task.yield_many(task_list)
    IO.inspect(tasks_with_result)

    Enum.map(tasks_with_result, fn {task, res} ->
      {_, result} = res || Task.shutdown(task, :brutal_kill) || {:err, nil}
      result
    end)
  end

  @doc """
  测试：TaskAll.test()
  """
  def test do
    a = fn -> load_a() end
    b = fn -> load_b() end
    c = fn -> load_c() end
    d = fn -> load_d() end

    [a1, b1, c1, d1] = task_all([a, b, c, d])

    res = %{
      a: a1,
      b: b1,
      c: c1,
      d: d1
    }

    IO.inspect(res)
  end

  defp load_a do
    Process.sleep(1000)
    "a"
  end

  defp load_b do
    Process.sleep(2000)
    "b"
  end

  defp load_c do
    "c"
  end

  defp load_d do
    Process.sleep(8000)
    "d"
  end
end

TaskAll.test()
