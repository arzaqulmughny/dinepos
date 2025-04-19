import Header from '@/components/cashier/Header';
import DetailOrderModal from '@/components/history/DetailOrderModal';
import { useModal } from '@/components/Modal';
import Table from '@/components/Table';
import React from 'react';
import Layout from './Layout';

const datafields = [
    {
        key: 'code',
        label: 'Kode Pesanan',
        type: 'string',
        sortable: true,
    },
    {
        key: 'customer',
        label: 'Nama Pelanggan',
        type: 'string',
        sortable: true,
    },
    {
        key: 'total',
        label: 'Total Transaksi',
        type: 'string',
        sortable: true,
    },
    {
        key: 'cashier',
        label: 'Kasir',
        type: 'string',
        sortable: true,
    },
    {
        key: 'created_at',
        label: 'Waktu',
        type: 'string',
        sortable: true,
    },
];

const History = () => {
    const { show: showDetailOrderModal, close: closeDetailOrderModal, open: openDetailOrderModal } = useModal();

    return (
        <div className="flex w-full flex-col gap-y-9 p-6">
            <Header
                title="Riwayat Pesanan"
                description="Transaksi 24 jam terakhir akan muncul disini. Tekan lihat untuk melakukan aksi atau melihat detail."
            />

            <Table
                datafields={[
                    ...datafields,
                    {
                        key: 'actions',
                        label: 'Aksi',
                        type: 'raw',
                        children: (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={openDetailOrderModal}
                                    type="button"
                                    className="cursor-pointer rounded-md bg-orange-400 px-2 py-1 text-white hover:brightness-95"
                                >
                                    Lihat
                                </button>
                            </div>
                        ),
                    },
                ]}
                options={{ pagination: true }}
                data={[
                    {
                        code: '11231',
                        customer: 'Agus',
                        total: '150000',
                        cashier: 'arza',
                        created_at: '30 Maret 2025 13:30',
                    },
                    {
                        code: '11232',
                        customer: 'Budi',
                        total: '200000',
                        cashier: 'Budi',
                        created_at: '30 Maret 2025 14:00',
                    },
                    {
                        code: '11233',
                        customer: 'Citra',
                        total: '250000',
                        cashier: 'Citra',
                        created_at: '30 Maret 2025 14:30',
                    },
                    {
                        code: '11234',
                        customer: 'Eko',
                        total: '300000',
                        cashier: 'Eko',
                        created_at: '30 Maret 2025 15:00',
                    },
                ]}
            />

            <DetailOrderModal show={showDetailOrderModal} onClose={closeDetailOrderModal} onPrintInvoice={() => {}} />
        </div>
    );
};

History.layout = (page: React.ReactNode) => <Layout children={page} title="Riwayat" />;

export default History;
