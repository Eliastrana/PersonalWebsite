import React from 'react';

type DataObject = {
    [key: string]: string | number | boolean | React.ReactNode;
};

type InfoTableProps = {
    data: DataObject;
};

const InfoTable: React.FC<InfoTableProps> = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full shadow-md">
                <thead>
                <tr className=" text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Info</th>
                    <th className="py-3 px-6 text-left">Beskrivelse</th>
                </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">{key}</td>
                        <td className="py-3 px-6 text-left">
                            {typeof value === 'boolean' ? value.toString() : value}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default InfoTable;
