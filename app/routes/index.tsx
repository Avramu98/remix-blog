import type { LoaderFunction } from '@remix-run/node';
import { requireUserId } from '~/utils/auth.server';
import { useSubmit } from '@remix-run/react';

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return null;
};

export default function Index() {
  const submit = useSubmit();
  return (
    <div className="h-screen w-full bg-slate-600">
      <div className="flex justify-between">
        <h2 className="font-bold text-5xl text-blue-400">Tailwind Works</h2>
        <button
          className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
          type="submit"
          onClick={() => {
            submit(null, { method: 'post', action: '/logout' });
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
