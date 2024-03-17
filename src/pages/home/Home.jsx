import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../../components/Spinner";

function Home() {
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [data, setData] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  async function finalSubmission(data) {
    console.log(data);
    try {
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: "http://localhost:5000/prisma",
        data: data,
      });
      getData();
      console.log(res.data);
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  }
  async function getData() {
    try {
      const res = await axios({
        method: "GET",
        url: "http://localhost:5000/prisma",
      });
      setData(res.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  async function handleDelete(data) {
    try {
      setLoadingDelete(true);
      const res = await axios({
        method: "DELETE",
        url: `http://localhost:5000/prisma/${data.id}`,
      });
      getData();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingDelete(false);
    }
  }
  async function updateData(data) {
    console.log(data);
    setUpdateId(data.id);
    setIsUpdate(true);
    setValue("name", data.name);
    setValue("email", data.email);
  }
  async function updateSubmission(data) {
    console.log("update: ", data);
    try {
      const res = await axios({
        method: "PUT",
        url: `http://localhost:5000/prisma/${updateId}`,
        data: { name: data.name, email: data.email },
      });
      getData();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(isUpdate ? updateSubmission : finalSubmission)}
      >
        <input
          {...register("name", {
            required: "Please a name is required",
            maxLength: { message: "something max", value: 10 },
            minLength: { message: "something min", value: 3 },
          })}
          placeholder="Name"
          type="text"
        />
        <div>{errors?.name?.message}</div>
        <br />
        <input
          {...register("email", {
            required: "Please password is required",
            maxLength: { message: "something max", value: 10 },
            minLength: { message: "something min", value: 3 },
          })}
          placeholder="email"
          type="text"
        />
        <div>{errors?.email?.message}</div>
        {/* <select {...register("gender", { required: "Please select a gender" })}>
          <option value=""></option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select> */}

        {!isUpdate ? (
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
            type="submit"
          >
            <div className="flex items-center gap-3">
              submit1{loading && <Spinner />}
            </div>
          </button>
        ) : (
          <button
            className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
            type="submit"
          >
            <div className="flex items-center gap-3">
              update{loading && <Spinner />}
            </div>
          </button>
        )}
      </form>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-5">
                      <button
                        onClick={() => updateData(item)}
                        className="bg-green-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Select {item.id}
                      </button>
                      <button
                        disabled={loadingDelete}
                        onClick={() => handleDelete(item)}
                        className="bg-red-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                      >
                        <div className="flex gap-2">
                          Delete {item.id}
                          {loadingDelete && <Spinner />}
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
