export default function Projects() {
    return (
        <div id='projectsSection' className='py-14'>
            <table className='base'>
                <thead>
                    <tr className='border-b border-white'>
                        <td className='text-sm'>NAME</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-lg'>Single-Page Website</td>
                        <td className='flex gap-3 justify-end'>
                            <button>
                                GitHub
                            </button>
                            <button>
                                View
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
