## Failures of Classical Theory

### 1. Blackbody Radiation

A blackbody is an ideal object that absorbs all electromagnetic radiation falling on it and emits radiation on heating.  A blackbody emits thermal electromagnetic radiation whose spectrum depends only on its temperature

Experimentally, the spectrum looks like this  

<img src="../assets/blackbody-radiation-graph.jpg" width="390">  

#### Rayleigh-Jeans Law

The findings can be summarized by 
1. **Wien's Displacement Law** 
	$\lambda_{max} T = 2.898 \times 10^{-3} m.K = b$
	where $\lambda_{max}$ is the wavelength at which blackbody radiates at maximum intensity when spectrum is plotted per unit wavelength, $T$ is the temperature, and $b$ is Wien's displacement constant
2. **Stefan's Law** 
	Total power of blackbody radiation emitted across entire spectrum of wavelengths at a given temperature. The expression is given by
	$$P(T)=\sigma AT^4$$
	where $A$ is the surface area of a blackbody, $T$ is its temperature (in $K$), and $\sigma$ is the **Stefan-Boltzmann constant**, $\sigma = 5.670 \times 10^{-8} W/(m^2 \dot K^4)$. 

The result of classical model for blackbody radiation is known as **Rayleigh-Jeans law**.  But it fails to correctly reproduce experimental results for shorter wavelengths though it works for larger, called *UV catastrophe.*

From Rayleigh--Jean's distribution assuming energy can take any value in $(0, \infty )$. The average value associated with an electromagnetic mode of frequency $\nu$ inside blackbody cavity in thermal equilibrium at temperature $T$ is found by summing product of energy and weights in numerator divided by weights in denominator. Since classical believes it is continuous, we integrate to find it and it is determined to be independent of $\nu$ and obtain $\bar{E} = k_B T = 1/\beta$ 

#### Planck's Law of Blackbody Radiation

Planck introduced idea of discrete energy levels called quanta in Planck's oscillator and that the energy of the oscillator in its $n$-th energy state, it has energy $E=nh\nu$, thus the smallest energy possible to exchange being $\Delta E = h\nu$, 
where $h=6.626 \times 10^{-34} J\cdot s = 4.136 \times 10^{-15} eV \cdot s$, $f$ is the frequency of Planck's oscillator.
Using this, average energy was found to be 
$$\bar{E} = \frac{h\nu}{\exp(h\nu/k_BT)-1}$$
which is dependent on frequency $\nu$.  At lower frequencies ($\lambda \to \infty$), we get $\bar{E} \approx k_B T = 1/\beta$   
Classical observations work at very larger wavelengths because $\nu$ is smaller and energy gap between consecutive discrete levels becomes tinier ($h\nu \ll k_B T$) but quantum model remains consistent throughout. 

He derived the energy-density formula
$$\rho(\lambda, T) = \frac{8\pi hc}{\lambda^5}\frac{1}{e^{hc/(\lambda k_B T)}-1}$$
where $c$ is the speed of light, $k_B$ is Boltzmann's constant, $k_B = 1.381 \times 10^{-23} J/K$. 
The spectral radiance coming out of blackbody in a particular direction (but same in every direction) is given by
$$I(\lambda, T) = \frac{2hc^2}{\lambda^5}\frac{1}{e^{hc/(\lambda k_B T)}-1}$$
where $I$ represents spectral radiance. 
$$\lim_{\lambda \to \infty} \rho(\lambda, T) = \frac{8\pi kT}{\lambda^4}$$ which represents the Rayleigh-Jeans spectral distribution law. 
Also, we can use this to show
$$\lambda_{max} T = \frac{hc}{4.965k_B} = b$$
### 2. Photoelectric Effect

#### Hertz Experiment

Hertz experiment discovered the photoelectric effect showing that visible light could be used to eject electrons from a metal surface. 
Lenard performed subsequent experiments and the observations established by Lenard were as follows:-
1. Electrons are emitted from a specific metal only if the incident light has a frequency greater than or equal to a minimum frequency called threshold frequency $\nu_t$ . 
2. The maximum kinetic energy $K_{max}$ of ejected electrons is independent of the intensity of the radiation. But, the photoelectric current depends upon intensity demonstrating that number of emitted electrons increases with intensity of the radiation at a fixed frequency.
3. The maximum kinetic energy $K_{max}$ of ejected electrons increases with frequency $\nu$ of the light.
4. The emission of electrons is nearly instantaneous 

#### Classical Electromagnetic Wave Theory

From classical electromagnetism, we know $E_0 \propto \sqrt{I}$ where $I$ is intensity of the light and $E_0$ is the amplitude of the electric field. Thus, electron shall experience a force $f = -eE$ and stronger the intensity of light, more energy electron will gain and thus sufficiently strong or sufficiently long illumination shall provide enough energy for electron to escape.  
Also, classical theory expects a time delay since at sufficiently low intensity, electron will theoretically accumulate energy to eventually escape.
But this is inconsistent with the observations except for that it could predict that photoelectric current shall increase with intensity. 

#### Einstein's Photon Theory

Einstein extended Planck's hypothesis of discrete energy quanta to electromagnetic radiation itself. While Planck had quantized the energy of his material oscillators as $E_n​=nh\nu$, Einstein proposed that light consists of quanta, each with energy $E​_\gamma=h\nu$. 

Einstein proposed that quanta (now called photon) of frequency ν is absorbed by an electron, and if its energy is greater or equal to the work function ϕ of the surface, the excess energy appears as the electron's kinetic energy:
$$K_{max} = h\nu - \phi$$
where $\phi$ is the work function such that $\phi = h\nu_t$ where $\nu_t$ is the threshold frequency.

