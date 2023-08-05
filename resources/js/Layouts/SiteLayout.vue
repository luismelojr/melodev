<script setup>
import { Link } from '@inertiajs/vue3'
import SiteLogo from '@/Components/SiteLogo.vue'
import responsive from '@/Utils/responsive.js'

const drawer = ref(false)

const isMobile = responsive().isMobile()
</script>

<template>
    <div>
        <q-layout view="lHh lpr lFf" container style="height: 100vh">
            <q-header class="bg-white md:tw-p-6 tw-p-4">
                <q-toolbar class="tw-bg-white">
                    <div
                        class="tw-w-full tw-flex tw-justify-between md:tw-grid md:tw-grid-cols-3 tw-items-center"
                    >
                        <Link :href="route('site.home')"
                            ><SiteLogo class="tw-w-[100px] -tw-ml-4"
                        /></Link>
                        <nav class="tw-hidden md:tw-block -tw-ml-6">
                            <ul
                                class="tw-text-black tw-flex tw-gap-10 tw-items-center"
                            >
                                <li>
                                    <Link
                                        :href="route('site.home')"
                                        class="tw-text-[16px] tw-font-sans tw-text-gray-600 hover:tw-text-bluedark tw-transition-all hover:tw-border-b-2 hover:tw-border-bluedark tw-pb-2"
                                        >Home</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        :href="route('site.home')"
                                        class="tw-text-[16px] tw-font-sans tw-text-gray-600 hover:tw-text-bluedark tw-transition-all hover:tw-border-b-2 hover:tw-border-bluedark tw-pb-2"
                                        >Produtos</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        :href="route('site.home')"
                                        class="tw-text-[16px] tw-font-sans tw-text-gray-600 hover:tw-text-bluedark tw-transition-all hover:tw-border-b-2 hover:tw-border-bluedark tw-pb-2"
                                        >Contato</Link
                                    >
                                </li>
                            </ul>
                        </nav>
                        <div
                            class="tw-items-center tw-gap-4 tw-hidden md:tw-flex"
                        >
                            <div
                                class="tw-overflow-hidden tw-bg-gray-100 tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-transition-all tw-rounded-sm tw-ml-8"
                            >
                                <div class="tw-relative">
                                    <svg
                                        class="tw-pointer-events-none tw-absolute tw-left-4 tw-top-[9px] tw-h-4 tw-w-4 tw-text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                    <input
                                        type="text"
                                        class="tw-w-full tw-border-0 tw-bg-transparent tw-pl-11 tw-pr-4 tw-text-gray-500 placeholder:tw-text-gray-400 focus:tw-ring-0 sm:tw-text-sm"
                                        placeholder="Search..."
                                        role="combobox"
                                        aria-expanded="false"
                                        aria-controls="options"
                                    />
                                </div>
                            </div>
                            <q-btn outline flat dense>
                                <i
                                    class="bx bx-cart tw-text-gray-600 tw-text-[1.5rem]"
                                ></i>
                                <q-badge
                                    rounded
                                    floating
                                    color="secondary"
                                    v-show="false"
                                    >4</q-badge
                                >
                            </q-btn>
                            <q-btn outline dense flat>
                                <i
                                    class="bx bx-user tw-text-gray-600 tw-text-[1.5rem]"
                                ></i>
                                <q-menu style="width: 150px">
                                    <q-list>
                                        <q-item clickable v-close-popup>
                                            <Link
                                                :href="
                                                    route('admin.profile.index')
                                                "
                                                class="tw-flex tw-items-center tw-gap-2 tw-w-full tw-text-gray-500 hover:tw-text-gray-800"
                                            >
                                                <i
                                                    class="tw-text-[14px] ri-user-settings-line"
                                                ></i>
                                                <span class="tw-text-[14px]"
                                                    >Editar perfil</span
                                                >
                                            </Link>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable v-close-popup>
                                            <Link
                                                :href="route('logout')"
                                                class="tw-flex tw-items-center tw-gap-2 tw-w-full tw-text-gray-500 hover:tw-text-gray-800"
                                                method="post"
                                                as="button"
                                            >
                                                <i
                                                    class="tw-text-[14px] ri-logout-box-line"
                                                ></i>
                                                <span class="tw-text-[14px]"
                                                    >Sair</span
                                                >
                                            </Link>
                                        </q-item>
                                    </q-list>
                                </q-menu>
                            </q-btn>
                        </div>
                        <q-btn
                            v-if="isMobile"
                            class="tw-block md:tw-hidden"
                            @click="drawer = !drawer"
                            flat
                            round
                            dense
                            icon="menu"
                            aria-label="Menu"
                            color="secondary"
                        />
                    </div>
                </q-toolbar>
            </q-header>

            <q-page-container>
                <q-page class="tw-flex tw-flex-col">
                    <div class="md:tw-px-6 tw-px-4 tw-pb-6">
                        <slot />
                    </div>
                    <footer class="tw-mt-auto" style="background: #eaedf2">
                        <div
                            class="md:tw-p-6 tw-p-4 md:tw-grid md:tw-grid-cols-4 md:tw-gap-2 tw-flex tw-flex-col"
                        >
                            <div class="tw-col-span-1 tw-mt-2">
                                <SiteLogo class="tw-w-[80px]" />
                                <p
                                    class="tw-text-sm tw-leading-6 tw-text-gray-400 tw-mt-2"
                                >
                                    Estilo e sofisticação para cada passo
                                    feminino.
                                </p>
                            </div>
                            <div
                                class="tw-col-span-3 md:tw-ml-10 tw-flex md:tw-items-start md:tw-gap-10 tw-flex-col md:tw-flex-row"
                            >
                                <div>
                                    <h4
                                        class="tw-uppercase tw-text-[12px] tw-text-gray-900"
                                    >
                                        Marcas
                                    </h4>
                                    <nav
                                        class="tw-text-gray-400 tw-list-none tw-flex tw-flex-col"
                                    >
                                        <nav
                                            class="tw-text-gray-400 tw-list-none tw-flex tw-flex-col tw-gap-1"
                                        >
                                            <li>
                                                <Link
                                                    :href="route('site.home')"
                                                    class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                    >Modare</Link
                                                >
                                            </li>
                                            <li>
                                                <Link
                                                    :href="route('site.home')"
                                                    class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                    >Renata Mello</Link
                                                >
                                            </li>
                                            <li>
                                                <Link
                                                    :href="route('site.home')"
                                                    class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                    >Azille</Link
                                                >
                                            </li>
                                            <li>
                                                <Link
                                                    :href="route('site.home')"
                                                    class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                    >Moleca</Link
                                                >
                                            </li>
                                        </nav>
                                    </nav>
                                </div>
                                <div>
                                    <h4
                                        class="tw-uppercase tw-text-[12px] tw-text-gray-900"
                                    >
                                        Produtos
                                    </h4>
                                    <nav
                                        class="tw-text-gray-400 tw-list-none tw-flex tw-flex-col tw-gap-1"
                                    >
                                        <li>
                                            <Link
                                                :href="route('site.home')"
                                                class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                >Ver todos os produtos</Link
                                            >
                                        </li>
                                        <li>
                                            <Link
                                                :href="route('site.home')"
                                                class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                >Tenis</Link
                                            >
                                        </li>
                                        <li>
                                            <Link
                                                :href="route('site.home')"
                                                class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                >Mocassim</Link
                                            >
                                        </li>
                                        <li>
                                            <Link
                                                :href="route('site.home')"
                                                class="tw-text-[12px] hover:tw-text-gray-900 tw-transition-all"
                                                >Salto alto</Link
                                            >
                                        </li>
                                    </nav>
                                </div>
                                <div>
                                    <h4
                                        class="tw-uppercase tw-text-[12px] tw-text-gray-900"
                                    >
                                        Atendimento
                                    </h4>
                                    <nav
                                        class="tw-text-gray-400 tw-list-none tw-flex tw-flex-col"
                                    >
                                        <li>
                                            <p class="tw-text-[12px]">
                                                Horário de atendimento: 09:00 às
                                                19:00 - Segunda a Sábado,
                                                horário de Brasília (Exceto
                                                domingo e feriados)
                                            </p>
                                        </li>
                                        <li class="-tw-mt-2">
                                            <p class="tw-text-[12px]">
                                                Endereço: Rua J-30 Qd 05 Lt 11 -
                                                Mansões Paraíso, Aparecidade de
                                                Goiânia - GO, 74952-250
                                            </p>
                                        </li>
                                    </nav>
                                </div>
                                <div>
                                    <h4
                                        class="tw-uppercase tw-text-[12px] tw-text-gray-900"
                                    >
                                        Contato
                                    </h4>
                                    <nav
                                        class="tw-text-gray-400 tw-list-none tw-flex tw-flex-col"
                                    >
                                        <li>
                                            <p>
                                                E-mail:
                                                <a
                                                    href="mailto:contato@grifis.com.br"
                                                    >contato@grifis.com.br</a
                                                >
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                Whatsapp:
                                                <a href="tel:623623-0000"
                                                    >(62) 3623-0000</a
                                                >
                                            </p>
                                        </li>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div
                            class="tw-border-t tw-border-t-gray-200 tw-flex tw-justify-center tw-items-center tw-pt-4"
                        >
                            <p class="tw-text-gray-400 tw-text-[12px]">
                                Todos os direitos reservados © 2023 -
                                Desenvolvido por
                                <a
                                    href="https://www.linkedin.com/in/luis-henrique-da-silva-melo-junior-416579155"
                                    target="_blank"
                                    >Luis Henrique</a
                                >
                            </p>
                        </div>
                    </footer>
                </q-page>
            </q-page-container>

            <q-drawer v-model="drawer" side="right">
                <q-list>
                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label>Home</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label>Produtos</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label>Contato</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>

                <div class="tw-items-center tw-gap-4 tw-flex tw-px-3 tw-mt-4">
                    <div
                        class="tw-overflow-hidden tw-bg-gray-100 tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-transition-all tw-rounded-sm"
                    >
                        <div class="tw-relative">
                            <svg
                                class="tw-pointer-events-none tw-absolute tw-left-4 tw-top-[9px] tw-h-4 tw-w-4 tw-text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                type="text"
                                class="tw-w-full tw-border-0 tw-bg-transparent tw-pl-11 tw-pr-4 tw-text-gray-500 placeholder:tw-text-gray-400 focus:tw-ring-0 sm:tw-text-sm"
                                placeholder="Search..."
                                role="combobox"
                                aria-expanded="false"
                                aria-controls="options"
                            />
                        </div>
                    </div>
                    <q-btn outline flat dense>
                        <i
                            class="bx bx-cart tw-text-gray-600 tw-text-[1.5rem]"
                        ></i>
                        <q-badge
                            rounded
                            floating
                            color="secondary"
                            v-show="false"
                            >4</q-badge
                        >
                    </q-btn>
                    <q-btn outline dense flat>
                        <i
                            class="bx bx-user tw-text-gray-600 tw-text-[1.5rem]"
                        ></i>
                    </q-btn>
                </div>
            </q-drawer>
        </q-layout>
    </div>
</template>
